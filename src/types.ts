export type Statut = 'A_FAIRE' | 'EN_COURS' | 'EN_REVUE' | 'TERMINEE'

export type Tache = {
  id: string
  titre: string
  statut: Statut
  echeance: string | null
  description: string
  projetId: string
  membreId: string | null
}

export type Projet = {
  id: string
  nom: string
}

export type Membre = {
  id: string
  nom: string
}

export type Idee = {
  id: string
  texte: string
}