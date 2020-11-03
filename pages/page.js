import React from 'react';
import { getPages } from './api/posts';

export default function Page({ pages }) {
    return (
        <div>
        <p>Hey</p>
        <ul>
            {pages.map(page => (
                    <li key={page.id}>
                    <a>{page.title}</a>
                </li>
            ))}
        </ul>
        </div>
    )
}


Page.getInitialProps = async (ctx) => {
    const pages = await getPages();
    return { pages: pages }
  }
  