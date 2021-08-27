scaleMinus = () => {
	if (mouth.scale.x <= 0.31 && mouth.scale.x > 0.2) {
		mouth.scale.x -= 0.0005;
	}
};
scalePlus = () => {
	if (mouth.scale.x <= 0.31) {
		mouth.scale.x += 0.005;
	}
	// if (mouth.scale.x < 0.2) {
	// 	mouth.scale.x = -0.2;
	// 	if (mouth.scale.x <= -0.2 && mouth.scale.x >= -0.31) {
	// 		mouth.scale.x -= 0.005;
	// 	}
	// }
	// return mouth.scale.x;
};
reverse = () => {
	mouth.scale.x = -1 * scalePlus();
	return mouth.scale.x;
};
