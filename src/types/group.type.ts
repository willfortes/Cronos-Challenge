export type Group = {
    id?: string
    name?: string
    tags?: string[]
    items?: GroupItem[]
    settings?: string[]
    owner?: string
}

export type Payer = {
    payer_name?: string
    payer_address?: string
    payer_address_state?: string
    payer_address_zipcode?: string
    payer_address_neighbordhood?: string
    payer_address_addressName?: string
    payer_address_number?: string
    payer_address_complement?: string
}

export type GroupItem = {
    id: string
    payer: Payer
}