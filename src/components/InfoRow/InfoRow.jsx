
function InfoRow({ children, label }) {
    return (
        <tr className="info-row">
            <td className="name">{label}</td>
            <td className="value">{children}</td>
        </tr>
    );
}

export default InfoRow;