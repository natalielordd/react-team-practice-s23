import '../styles/section2.scss';
import penguin from '/Users/stephanietran/Desktop/react-team-practice-s23/src/components/IMG_1236.jpeg';
export default function Section2(): JSX.Element {
  return (
    <div id="section2">
      <h1>Stephanie Tran!</h1>
      <p className="test">About Me</p>
      <ul>
        <li id="firstBullet">I chewed on a fly once because I thought it was a boba ball...</li>
        <li id="secondBullet">I can make a star shape with a rubber band and my fingers!</li>
        <li id="thirdBullet">I have been to two BTS concerts.</li>
      </ul>
      <img src={penguin} height="300px" />
    </div>
  );
}
