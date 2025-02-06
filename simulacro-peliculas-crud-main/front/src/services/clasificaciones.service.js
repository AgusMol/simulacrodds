import axios from 'axios'
const urlResource = "http://localhost:3001/api/clasificaciones";

async function getAll() {
    const resp = await axios.get(`${urlResource}`);
    return resp.data;
}

const clasificacionesService = {
    getAll
}

export default clasificacionesService;