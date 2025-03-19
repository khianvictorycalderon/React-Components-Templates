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
    PartialMatchDictionaryWithCommand: Record<string, any>,
    FullMatchDictionary: string = `...`, // Full match dictionary content
    PartialMatchDictionary: string = `...`, // Partial match dictionary content
    UnknownResponse: string = `...` // Unknown response content
): string => {
    let input = convoHistory[convoHistory.length - 1];

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
    function searchPreDefinedMatchesWithCommand(
        conversationHistory: string[],
        dictionary: Record<string, any>
    ): string | null {
        const normalizedHistory = conversationHistory.map(input =>
            input.toLowerCase().trim()
        );
    
        for (let key in dictionary) {
            let [patterns, responses] = key.split("=:=");
            if (!responses) continue;
        
            let patternSets = patterns.split("^"); // multi-turn split
            let requiredTurns = patternSets.length;
            if (requiredTurns > normalizedHistory.length) continue;
        
            let match = patternSets.every((patternSet, idx) => {
                let turn = normalizedHistory[normalizedHistory.length - requiredTurns + idx];
                let orSets = patternSet.split('/');
        
                return orSets.some(set => {
                    let wordGroups = set.split(',').map(wordGroup => wordGroup.trim());
                    return wordGroups.every(wordGroup => {
                        let alternatives = wordGroup.split('|').map(w => w.trim());
                        return alternatives.some(alt => turn.includes(alt));
                    });
                });
            });
        
            if (match) {
                let responseOptions = responses.split('<or>').map(r => r.trim());
                let action = dictionary[key];
                if (typeof action === "function") action();
                return getRandomResponse(responseOptions);
            }
        }        
    
        return null;
    }      

    // Try to get an exact match response first
    const exactMatchResponse: string | null = getExactMatchResponse(exactMatchInput);
    if (exactMatchResponse) return exactMatchResponse;

    // Try command-based partial match
    const commandMatchResponse: string | null = searchPreDefinedMatchesWithCommand(convoHistory, PartialMatchDictionaryWithCommand);
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
