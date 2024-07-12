const Home: React.FC = () => {
    let arr = Array.from({ length: 10000 }, (v, i) => i + 1);
    return (
        <div>
            {arr.map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </div>
    );
};

export default Home;
