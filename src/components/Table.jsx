export const Table = (props) => {
    return (
        <div className="overflow-x-auto">
            <table className="table text-center" dir="rtl">
                {props.children}
            </table>
        </div>
    )
}

export const Thead = (props) => {
    return (
        <thead>
            {props.children}
        </thead>
    )
}

export const Tbody = (props) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}

export const Row = (props) => {
    return (
        <tr className="border-black/10">
            {props.children}
        </tr>
    )
}

export const Col = (props) => {
    return (
        <td>
            {props.children}
        </td>
    )
}