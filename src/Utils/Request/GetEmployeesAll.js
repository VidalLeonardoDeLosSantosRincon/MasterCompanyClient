export const GetEmployeesAll = async (route ="") => {
    const url = `https://localhost:7124/api/employees/${route}`;
    const req = await fetch(url);
    const res = await req.json();
    return res;
} ; 