const BuildControl = props => {
    return (
        <div className="d-flex ">
            <div className="me-auto ml-5 " style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{props.label}</div>
            <div >
                <button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Less</button>
                <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
            </div>

        </div>
    )
}
export default BuildControl;