export const Respond = (
    input: string,
    PartialMatchDictionaryWithCommand: Record<string, any> = {
        "close,this,window=:=Sure, closing the window now...": () => setTimeout(() => window.close(), 200)
    },
    FullMatchDictionary: string = `
        hi/hello/hi./hello./hi there/hi there./hello there/hello there.=:=
            Hi there, what brings you here today?<or>Hello, what can I do for you?<or>Hi there, how can I help you?
        <and>how are you/how are you?=:=
            I'm good, thank you for asking.<or>
            Thanks for asking, I'm fine.<or>
            Very much appreciated, I'm doing just fine.
    `,
    PartialMatchDictionary: string = `
        what|which,model,you=:=
            I do not use any existing chatbot model, but rather custom trained by my developer with custom logic from scratch.
        <and>who,made|create|develop,you=:=
            I was developed and created by Khian Victory D. Calderon.
        <and>what,are,you=:=
            I am a chatbot ready to assist you.<or>
            I am an artificial bot ready to talk to you.<or>
            I am a bot, how can I help you?
        <and>how,you,work/how,you,generate,response/how,you,respond=:=
            I work by looking at my predefined data and rules and matching your input to my data then generating my response.
    `,
    UnknownResponse: string = `
        Sorry, but I am unable to understand you.,.
        Apologies, but I don't understand you.,.
        Sorry, but I don't understand you.,.
        I am unable to understand what you are saying.,.
        I don't know what you are talking about.,.
        I don't understand what you are saying.,.
        I can't understand you.,.
        I am unable to understand you.
    `
): string => {

    // Constants
    const universalSplitter: string = ".,.";
    const universalPartialMatcher: string = "=:=";

    const exactMatchInput: string = input.trim().toLowerCase();
    const normalizedInput: string = input.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase().trim();

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

    // Function to parse PartialMatchDictionary into an object
    function parsePreDefinedPartialMatch(matchString: string): { [key: string]: string[] } {
        let result: { [key: string]: string[] } = {};
        let patternResponsePairs = matchString.trim().split('<and>');

        for (let pair of patternResponsePairs) {
            let [patterns, responses] = pair.split(universalPartialMatcher);
            let patternSets = patterns.split('/');
            let responseList = responses.split('<or>');

            for (let set of patternSets) {
                let key = set.trim();
                result[key] = responseList.map(res => res.trim());
            }
        }

        return result;
    }

    // Function to search in predefined match lists
    function searchPreDefinedMatches(...matchStrings: string[]): string | null {
        for (let matchString of matchStrings) {
            const matchList = parsePreDefinedPartialMatch(matchString);  // Parse each match string when needed
            for (let key in matchList) {
                let patternSets = key.includes('/') ? key.split('/') : [key];
                let match = patternSets.some(set => {
                    let patterns = set.split(',');
                    return patterns.every(pattern => {
                        let alternatives = pattern.split('|');
                        return alternatives.some(alternative => normalizedInput.includes(alternative));
                    });
                });

                if (match) {
                    let responses = matchList[key];
                    return getRandomResponse(responses);
                }
            }
        }
        return null; // No match found
    }

    // Function to parse PartialMatchDictionaryWithCommand
    function searchPreDefinedMatchesWithCommand(dictionary: Record<string, any>): string | null {
        for (let key in dictionary) {
            let [patterns, responses] = key.split(universalPartialMatcher);
            let patternSets = patterns.split('/');
            let responseText = responses.trim();
            let action = dictionary[key]; // Retrieve the associated function if it exists

            let match = patternSets.some(set => {
                let patterns = set.split(',');
                return patterns.every(pattern => {
                    let alternatives = pattern.split('|');
                    return alternatives.some(alternative => normalizedInput.includes(alternative));
                });
            });

            if (match) {
                if (typeof action === "function") {
                    action(); // Execute the function
                }
                return responseText; // Return the associated text response
            }
        }
        return null; // No match found
    }

    // Try to get an exact match response first
    const exactMatchResponse: string | null = getExactMatchResponse(exactMatchInput);
    if (exactMatchResponse) return exactMatchResponse;

    // Try command-based partial match
    const commandMatchResponse: string | null = searchPreDefinedMatchesWithCommand(PartialMatchDictionaryWithCommand);
    if (commandMatchResponse) return commandMatchResponse;

    // Try partial match if no exact match is found
    const partialMatchResponse: string | null = searchPreDefinedMatches(PartialMatchDictionary);
    if (partialMatchResponse) return partialMatchResponse;

    // Return a random unknown response
    const unknownResponses: string[] = UnknownResponse
        .trim()
        .split(universalSplitter)
        .map((r: string) => r.trim());

    return getRandomResponse(unknownResponses);
};
