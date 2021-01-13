export default function FullUsers(props) {
    const {items} = props;

    return (

        <div>
            {items.map(user => (<div key={user.id}>{user.id}-{user.username}</div>))}

        </div>
    );
}