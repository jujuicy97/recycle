import UsageData from '../assets/UsageGuide.json';

const UsageGuide = () => {
  return (
    <div className='guide-wrapper'>
    <h2>Product usage guide</h2>
    <ul className='guide'>
      {UsageData.map((item,idx)=>(
        <li key={idx} className={item.pos === "left" ? "left" : "right"}>
          {item.pos === "left" ? (
            <>
              <img src={item.img} alt='재생지 노트 활용법 left' className='circle'/>
              <p>{item.text}</p>
            </>
          ) : (
            <>
              <p>{item.text}</p>
              <img src={item.img} alt='재생지 노트 활용법 right' className='circle'/>
            </>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default UsageGuide;