function MailboxList({ mailboxes, handleMailboxClick}) {
    return (
        <div>
            <h1>Mailboxes</h1>
                {mailboxes.map(mailbox => (
                    <div className="mail-box" key={mailbox._id}>
                        <a href="#" onClick={() => handleMailboxClick(mailbox._id)}>{mailbox.owner}</a>
                    </div>
                ))}
        </div>
    )
}

export default MailboxList