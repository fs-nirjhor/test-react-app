import {useRef} from 'react';

export default function Button() {
  const ref = useRef(null);

  const handleClick = () => {
    // 👇️ use document.getElementById()
    /*const element = document.getElementById('box');
    console.log(element);*/

    // 👇️ (better) use a ref
    const element2 = ref.current;
    console.log(element2);
  };

  return (
    <div>
      <h2 ref={ref} id="box">
        bobbyhadz.com
      </h2>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}