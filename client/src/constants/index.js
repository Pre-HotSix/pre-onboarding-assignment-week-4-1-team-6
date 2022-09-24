export const COMPANY_NAME = 'D. PREFACE';
const ORDER = 'desc';
const SORT = 'id';
const PAGE = 1;
export const LIMIT = 20;

export const BASE_URL_USERS = `/users?_order=${ORDER}&_sort=${SORT}`;
export const BaseUrlUsers = (search) => `/users?_order=${ORDER}&_sort=${SORT}&q=${search}`;
export const PAGE_URL_USERS = `/users?_order=${ORDER}&_sort=${SORT}&_page=${PAGE}&_limit=${LIMIT}&q=`;
export const pageUrlUsers = (page, search) => `/users?_order=${ORDER}&_sort=${SORT}&_page=${page}&_limit=${LIMIT}&q=${search}`;

export const BASE_URL_ACCOUNTS = `/accounts?_order=${ORDER}&_sort=${SORT}`;
export const BaseUrlAccounts = (search) => `/accounts?_order=${ORDER}&_sort=${SORT}&q=${search}`;
export const PAGE_URL_ACCOUNTS = `/accounts?_order=${ORDER}&_sort=${SORT}&_page=${PAGE}&_limit=${LIMIT}&q=`;
export const pageUrlAccounts = (page, search) => `/accounts?_order=${ORDER}&_sort=${SORT}&_page=${page}&_limit=${LIMIT}&q=${search}`;

export const localTime = (date) => {
  if (date === undefined) return null
  const localDate = new Date(date);
  const year = localDate.getFullYear();
  const month = localDate.getMonth() + 1;
  const day = localDate.getDate();
  const full = `${year}-${month < 10 ? ('0' + month): month}-${day < 10 ? ('0' + day): day}`;

  return full;
};