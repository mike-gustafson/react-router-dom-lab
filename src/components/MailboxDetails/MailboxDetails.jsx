function MailboxDetails({ mailbox }) {
    console.log('test', mailbox)
    return (
        <div>
            <h2>{mailbox.owner}</h2>
            <p>{mailbox.size}</p>
        </div>
    )
}

export default MailboxDetails