const List = () => {
  const items = ["Apple", "Banana", "Cherry"]
  return (
    <ul>
        {items.map((i) => (
            <li key={i}>{i}</li> //키값으로 변화를 감지한다 
        ))}
    </ul>
  );
};

export const FilteredList = () => {
    const items = [
        {
            id: 1,
            text :'react',
            completed: true,
        },
        {
            id: 2,
            text :'build',
            completed: false,
        },
        {
            id: 3,
            text :'fetch',
            completed: true,
        },
    ];
    return( 
        <ul>
         { items
            .filter((i) => i.completed === false)
            .map((i) => (
            <li>{i.text}</li>
        ))}
    </ul>
    );
};

export default List;