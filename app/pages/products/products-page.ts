import { NavigatedData, Page } from '@nativescript/core';
import { ProductsViewModel } from './products-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new ProductsViewModel();
}