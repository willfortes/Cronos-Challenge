import { useState } from "react"
import { GROUPS } from "../../../service/data/groups"
import { Group } from "../../../types/group.type"
import { create } from 'zustand'

const useGroup = create((set) => ({
    groups: GROUPS,
    searchGroups: (query: string) => set((state:any) => ({groups: !query.trim() ? GROUPS : state.groups.filter((group: any) => group.name.includes(query))})),
    searchByOwner: (owner: string) => set((state:any) => ({groups: !owner.trim() ? GROUPS : state.groups.filter((group: any) => group.name.includes(owner))})),
    createGroup: (group: Group) => set((state:any) => ({groups: [...state.groups, group]})),
    deleteGroup: (groupId: string) => set((state: any) => ({groups: state.groups.filter((group: any) => group.id !== groupId)})),
    updateGroup: (groupId: string, data: Group) => set((state: any) => {
        const groupIndex = state.groups.findIndex((group: any) => group.id === groupId);
        console.log(groupIndex)
        if (groupIndex !== -1) {
          const updatedGroup = { ...state.groups[groupIndex], ...data };
          const updatedGroups = [...state.groups];
          updatedGroups[groupIndex] = updatedGroup;
          return { groups: updatedGroups };
        }
        return state;
      })
}))

export default useGroup