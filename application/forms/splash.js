let splashFormProperties = {
    name: 'splashForm',
    className: 'TForm',
    width: 500,
    height: 500,
    screenCenter: true, 
    visible: false,
    noTitle: true,
    content: {
        splashPicture: {
            className: 'TPicture',
            top: 0,
            right: 0, 
            bottom: 0, 
            left: 0,
            backgroundSize: 'cover',
            image: 'application/resources/images/backgrounds/splash.jpg'
        }
    }
}

export default splashFormProperties;
