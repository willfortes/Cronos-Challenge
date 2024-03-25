import { Group, GroupItem } from "../../types/group.type";

const TAGS = [
    "Tag 01",
    "Tag 02",
    "Tag 03",
    "Tag 04",
    "Tag 05"
]

const GROUPITENS: GroupItem[] = [
    {
        id: "QWER-ASDF-ZXCV",
        payer: {
            payer_address: 'Address 01',
            payer_address_addressName: 'Address Name 01',
            payer_address_complement: 'Complement 01',
            payer_address_neighbordhood: 'Neighbordhood 01',
            payer_address_number: '01',
            payer_address_state: 'SC',
            payer_address_zipcode: '00000000',
            payer_name: 'Name 01'
        },
    }
]

const GROUPS: Group[] = [
    {
        id: 'WQER-ASDF-ZXCV-QWER',
        name: 'Grupo 02',
        tags: ['tag1', 'tag2', 'tag3', 'tag3'],
        items: GROUPITENS,
        settings: ['setting01'],
        owner: 'Owner 01'
    },
    {
        id: 'WQER-ASDF-ZXCV-REWQ',
        name: 'Grupo 03',
        tags: ['tag1', 'tag2', 'tag3', 'tag3'],
        items: GROUPITENS,
        settings: ['setting01'],
        owner: 'Owner 01'
    },
    {
        id: 'WQER-ASDF-ZXCV-ASDF',
        name: 'Grupo 04',
        tags: ['tag1', 'tag2', 'tag3', 'tag3'],
        items: GROUPITENS,
        settings: ['setting01'],
        owner: 'Owner 01'
    },
    {
        id: 'WQER-ASDF-ZXCV-FDSA',
        name: 'Grupo 05',
        tags: ['tag1', 'tag2', 'tag3', 'tag3'],
        items: GROUPITENS,
        settings: ['setting01'],
        owner: 'Owner 01'
    },
    {
        id: 'WQER-ASDF-ZXCV-ZXCV',
        name: 'Grupo 06',
        tags: ['tag1', 'tag2', 'tag3', 'tag3'],
        items: GROUPITENS,
        settings: ['setting01'],
        owner: 'Owner 01'
    }
]

export {
    GROUPS,
    GROUPITENS,
    TAGS
}