import keyword from '../assets/note-keyword.json';

const NotePage_Keyword = () => {
  return (
    <ul className="keyword">
      {keyword.map((list, i) => (
        <li key={i}>
          {list.map((item, j) => (
            <p key={j}>{item}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default NotePage_Keyword;