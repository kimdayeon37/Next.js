export default async function Read(props) {
        const topicId = props.params.id.trim();
        const resp = await fetch(`http://localhost:9999/topics/${topicId}`);

        const topic = await resp.json();
        return (
            <>
                <h2>{topic.title}</h2>
                {topic.body}
            </>
        );
}
