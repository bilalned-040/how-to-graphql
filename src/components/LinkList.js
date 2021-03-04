import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  query{
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;



const LinkList = () => {
    const { data,loading } = useQuery(FEED_QUERY);
    
    if(loading){
        return(
            <div>
                <h1>loading</h1>
            </div>
        )

    }
    console.log(data);
    return (
        <div>
            {data.feed.links.map((link) => (
                <Link key={link.id} link={link} />
            ))}
        </div>
  );
};

export default LinkList;