import startImg from './images/0.jpg';

const StartOfTheGame = (props) => {
    const { word } = props;

    const writeUnderscore = () => {
        let underscore = ' ';

        for (let i = 0; i < word.length; i++) {
            underscore += ' _ ';
        };

        return underscore;
    };

    return (
        <div>
            <img src={startImg} alt="startImg" className="img" />
            <span><h1>{writeUnderscore()}</h1></span>
        </div>

    );
};

export { StartOfTheGame };