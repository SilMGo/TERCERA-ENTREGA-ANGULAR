import { createReducer, on } from "@ngrx/store";
import { User } from "../../../../layout/dashboard/pages-dashboard/alumnos-users/models";
import { AuthActions } from "../actions";

export const featureName = 'auth';
export interface AuthState {
     user: User | null;
    }

    const initialState: AuthState = {
        user: null,
        };
        export const authReducer = createReducer(
         initialState,
         on(AuthActions.setAuthUser, (state, action) => {
            return {
              ...state,
       user: action.user, 
      };
      })
         
         )