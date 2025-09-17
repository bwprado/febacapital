"use server"

import consultants from '../mock/consultants.json'

export async function getConsultants() {
  return consultants
}
