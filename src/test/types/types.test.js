import {types} from '../../types/types';
describe('pruebas en journal app', () => {
    test('debe de tener los types correctos', () => {
        const typesExpected = {

            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] set error',
            uiRemoveError: '[UI] remove error',
        
            uiStartLoading: '[UI] start loading',
            uiFinishLoading: '[UI] finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load note',
            notesUpdated: '[Notes] Update note',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
            
        }

        const typesImported = types

        expect(typesImported).toEqual(typesExpected);
    })
    
})
