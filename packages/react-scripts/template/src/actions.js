export const LOAD_PAGE = 'ccb/pepper/load_page';
export function loadPage(payload) {
  return {
    type: LOAD_PAGE,
    payload,
  }
}