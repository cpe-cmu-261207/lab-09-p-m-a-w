import {
    IconCheck,
    IconTrash,
    IconArrowUp,
    IconArrowDown,
} from "@tabler/icons";

export default function Menu({ hide, on }) {
    return (<div style={hide ? { display: 'none' } : { display: '' }}>
        <button onClick={on.complete} className="btn btn-success">
            <IconCheck />
        </button>
        <button onClick={on.up} className="btn btn-secondary">
            <IconArrowUp />
        </button>
        <button onClick={on.down} className="btn btn-secondary">
            <IconArrowDown />
        </button>
        <button onClick={on.delete} className="btn btn-danger">
            <IconTrash />
        </button>
    </div>)
}