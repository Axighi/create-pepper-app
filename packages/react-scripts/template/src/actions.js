export const LISTEN = "listen";
export function listen(payload) {
  return {
    type: LISTEN,
    payload
  };
}

export const SPEAK = "speak";
export function speak(payload) {
  return {
    type: SPEAK,
    payload
  };
}

export const ANSWER = "answer";
export function answer(payload) {
  return {
    type: ANSWER,
    payload
  };
}

export const PROMPT = "prompt";
export function prompt(payload) {
  return {
    type: PROMPT,
    payload
  };
}
