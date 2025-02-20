import "./MailboxList.css"

function MailboxList({ mailboxes, handleMailboxClick}) {
    return (
        <div>
            <h1>Mailboxes</h1>
            <div className="mail-boxes">
                {mailboxes.map(mailbox => (
                    <div className="mail-box" key={mailbox._id}>
                        <span className="box-number">Box No. {mailbox._id}</span>
                        <a className="box-owner" href="#" onClick={() => handleMailboxClick(mailbox._id)}>{mailbox.owner}</a>
                        <span>Box Size: {mailbox.size[0].toUpperCase()}{mailbox.size.slice(1, (mailbox.size.length))}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MailboxList