export const GetEmployeesAll = async () => {
    const url = `https://localhost:7124/api/employees`;
    const req = await fetch(url);
    const res = await req.json();
    return res;
} ; 