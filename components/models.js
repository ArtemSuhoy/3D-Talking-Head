loader.load(
    "male/scene.gltf",
    function (gltf) {
        console.log(gltf);
        root = gltf.scene.children[0];
        root.scale.set(5, 5, 5);
        root.position.set(0, -2.4, 0);
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loader");
    },
    function (error) {
        console.log("An error occurred");
    }
);

export default Male;