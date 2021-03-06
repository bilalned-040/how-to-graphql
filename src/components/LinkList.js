import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
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
        {data && (
          <>
            {data.feed.links.map((link, index) => (
              <Link key={link.id} link={link} index={index} />
            ))}
          </>
        )}
      </div>
    );
};

export default LinkList;