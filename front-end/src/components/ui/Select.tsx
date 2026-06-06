interface SelectOption {
    value: string
    label: string
}

type SelectProps = {
    selectOps: SelectOption[]
    selName: string
}

export default function Select({selectOps, selName}: SelectProps) {
    return(
        <select name={selName}>
            {selectOps.map(selOption => (
                <option value={selOption.value}>{selOption.label}</option>
            ))}
        </select>
    )
}