import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoguinAunthComponent } from "./loguin-aunth/loguin-aunth.component";

const routes: Routes = [
        {
            path: 'login',
            component: LoguinAunthComponent
        },
];


@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AunthRoutingModule {}