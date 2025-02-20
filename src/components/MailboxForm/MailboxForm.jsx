function MailboxForm( { addMailbox }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const owner = event.target.boxOwner.value;
        const size = event.target.boxSize.value;
        addMailbox({ owner, size });
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="mailbox-name">Mailbox Name:</label>
            <input type="text" id="boxOwner" />
            <label htmlFor="mailbox-size">Mailbox Size:</label>
            <select id="boxSize">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button type="submit">Create Mailbox</button>
        </form>
    )
}

export default MailboxForm