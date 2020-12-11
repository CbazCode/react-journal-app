import cloudinary from 'cloudinary';

import {fileUpload} from '../../helpers/fileUpload'

cloudinary.config({ 
    cloud_name: 'cbazcloud', 
    api_key: '656182118467721', 
    api_secret: 'FDDViDm4V3_TPVZYfNdAOaSeHhM' 
});

describe('pruebas en fileUpload', () => {
    
    
    test('debe de cargar un archivo y retornar un Url', (done) => {
        // const res = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');


        // const blob = await res.blob();
        fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')
            .then((res)=>{
                return res.blob();
            })
            .then((blob)=>{
                const file = new File([blob], 'foto.png');
                return fileUpload( file )
            })
            .then( (url)=>{
                expect( typeof url).toBe('string');
                //Borrar imagen por ID
                const segments = url.split('/');
                const imageId = segments[ segments.length - 1 ].replace('.png','');
                cloudinary.v2.api.delete_resources(imageId, {}, () => {
                        done();
                });
            })



        


    })
    

    test('debe de retonar un error', async() => {
        
        const file = new File([], 'foto.png');

        const url = await fileUpload( file );
        expect( url).toBe(null);


    })
})
