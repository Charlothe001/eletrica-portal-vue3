// src/services/api.js
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })
  if (!res.ok) {
    const errText = await res.text().catch(()=>null)
    throw new Error(errText || `HTTP error ${res.status}`)
  }
  return res.json().catch(()=>null)
}

/* Serviços */
export const getServicos = () => request('/servicos')
export const createServico = (payload) =>
  request('/servicos', { method: 'POST', body: JSON.stringify(payload) })

/* Equipamentos */
export const getEquipamentos = () => request('/equipamentos')
export const createEquipamento = (payload) =>
  request('/equipamentos', { method: 'POST', body: JSON.stringify(payload) })

/* Manutenções */
export const getManutencoes = () => request('/manutencoes')
export const createManutencao = (payload) =>
  request('/manutencoes', { method: 'POST', body: JSON.stringify(payload) })

/* Projetos */
export const getProjetos = () => request('/projetos')
export const createProjeto = (payload) =>
  request('/projetos', { method: 'POST', body: JSON.stringify(payload) })
