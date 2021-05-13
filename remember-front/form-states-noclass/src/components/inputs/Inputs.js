import React from 'react'
import { ContainerTextStyles } from './InputsStyles'

export const InputText = ({name, label}) => {
    return (
        <ContainerTextStyles>
            {label && <labelStyles htmlFor={name}>{label}</labelStyles>}
        </ContainerTextStyles>
    )
}
