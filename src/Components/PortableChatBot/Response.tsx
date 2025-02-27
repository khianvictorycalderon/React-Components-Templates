function parsePreDefinedPartialMatch(matchString: string): { [key: string]: string[] } {
    let result: { [key: string]: string[] } = {};
    let patternResponsePairs = matchString.trim().split("<and>");

    for (let pair of patternResponsePairs) {
        let [patterns, responses] = pair.split("=:=");
        if (!responses) continue; // Skip invalid entries

        let patternSets = patterns.split("/"); // Multiple patterns in one block
        let responseList = responses.split("<or>").map((res) => res.trim());

        // Handle each set of patterns separately
        for (let set of patternSets) {
            let key = set.trim();
            result[key] = responseList;
        }
    }

    return result;
}

function searchPreDefinedMatches(
    conversationHistory: string[],
    predefinedMatchString: string
): string | null {
    const matchList = parsePreDefinedPartialMatch(predefinedMatchString);
    const normalizedHistory = conversationHistory.map((input) => input.toLowerCase().trim());

    for (let key in matchList) {
        let patternSets = key.split("^"); // Multi-turn separation (using ^ separator)
        let requiredTurns = patternSets.length;

        if (requiredTurns > normalizedHistory.length) continue; // Not enough history to match

        let match = patternSets.every((set, index) => {
            let patterns = set.split("/").map((s) => s.trim()); // Multi-turn split within a single pattern
            let currentTurn = normalizedHistory[normalizedHistory.length - requiredTurns + index];

            return patterns.some((phrase) => {
                let words = phrase.split(",").map((w) => w.trim()); // Split into alternative word sets
                return words.every((wordGroup) => {
                    let alternatives = wordGroup.split("|");
                    return alternatives.some((alt) => currentTurn.includes(alt));
                });
            });
        });

        // If a match is found, return a random response
        if (match) {
            let responses = matchList[key];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    return null; // No match found
}

// Main response function
export const Respond = (
    convoHistory: string[],
    PartialMatchDictionaryWithCommand: Record<string, any> = {
        "close,this,window=:=Sure, closing the window now...": () => setTimeout(() => window.close(), 200)
    },
    FullMatchDictionary: string = `...`, // Full match dictionary content
    PartialMatchDictionary: string = `...`, // Partial match dictionary content
    UnknownResponse: string = `...` // Unknown response content
): string => {
    let input = convoHistory[convoHistory.length - 1];
    let normalizedInput: string = input.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();

    // Constants
    const universalSplitter: string = ".,.";
    const universalPartialMatcher: string = "=:=";

    const exactMatchInput: string = input.trim().toLowerCase();

    // Function to get a random response from an array
    const getRandomResponse = (responses: string[]): string =>
        responses[Math.floor(Math.random() * responses.length)];

    // Function to parse FullMatchDictionary into an object
    const parseExactMatch = (inputString: string): Record<string, string[]> => {
        const matchObject: Record<string, string[]> = {};
        const pairs: string[] = inputString.trim().split('<and>');

        for (const pair of pairs) {
            const [key, responses] = pair.split(universalPartialMatcher);
            if (key && responses) {
                matchObject[key.trim()] = responses
                    .split('<or>')
                    .map((response: string) => response.trim());
            }
        }
        return matchObject;
    };

    // Function to get an exact match response
    const getExactMatchResponse = (input: string): string | null => {
        const inputSegments: string[] = input.split('/').map(segment => segment.trim().toLowerCase());
        const matchData: Record<string, string[]> = parseExactMatch(FullMatchDictionary);

        for (const [key, responses] of Object.entries(matchData)) {
            const keySegments: string[] = key.split('/').map(segment => segment.trim().toLowerCase());
            if (inputSegments.some(segment => keySegments.includes(segment))) {
                return getRandomResponse(responses);
            }
        }
        return null;
    };

    // Function to check command-based matches
    function searchPreDefinedMatchesWithCommand(dictionary: Record<string, any>, normalizedInput: string): string | null {
        // Iterate over the dictionary to find a match
        for (let key in dictionary) {
            // Split the key into patterns and responses
            let [patterns, responses] = key.split(universalPartialMatcher);
            let patternSets = patterns.split('/');
            let responseText = responses.trim();
            let action = dictionary[key]; // Retrieve the associated function if it exists
    
            // Check if any of the pattern sets match the input
            let match = patternSets.some(set => {
                let patterns = set.split(','); // Split patterns by comma
                return patterns.every(pattern => {
                    let alternatives = pattern.split('|'); // Split alternatives by pipe (|)
                    return alternatives.some(alternative => normalizedInput.includes(alternative)); // Match alternatives
                });
            });
    
            // If a match is found, execute the action and return the response
            if (match) {
                if (typeof action === "function") {
                    action(); // Execute the associated function
                }
                return responseText; // Return the response associated with the match
            }
        }
        
        // Return null if no match is found
        return null;
    }
    

    // Try to get an exact match response first
    const exactMatchResponse: string | null = getExactMatchResponse(exactMatchInput);
    if (exactMatchResponse) return exactMatchResponse;

    // Try command-based partial match
    const commandMatchResponse: string | null = searchPreDefinedMatchesWithCommand(PartialMatchDictionaryWithCommand, normalizedInput);
    if (commandMatchResponse) return commandMatchResponse;

    // Try partial match if no exact match is found
    const partialMatchResponse: string | null = searchPreDefinedMatches(convoHistory, PartialMatchDictionary);
    if (partialMatchResponse) return partialMatchResponse;

    // Return a random unknown response
    const unknownResponses: string[] = UnknownResponse
        .trim()
        .split(universalSplitter)
        .map((r: string) => r.trim());

    return getRandomResponse(unknownResponses);
};
