const Buttons: React.FC = () => {
    const HandleClick = (op:boolean) => {
        if(op){
            // caso si
            alert("dijo si");
        }else{
            //caso no
            alert("dijo no");
        }
    }
	return (
		<>
			<button onClick={() => HandleClick(true)}>si</button>
			<button onClick={() => HandleClick(false)}>no</button>

		</>
	);
};

export default Buttons;