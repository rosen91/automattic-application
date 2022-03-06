import React, { FunctionComponent, useEffect, useState } from "react";
import { BASE_API_URL, WP_RES } from "../../App";
import { ComponentProps } from "../../Components";

export const Query: FunctionComponent<ComponentProps> = ({ attr }) => {
  const [data, setData] = useState<WP_RES[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/${attr.query.postType}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let res = await response.json();
        setData(res);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="cv-grid">
      {data?.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.title.rendered}</h4>
            <div
              className="pullquote"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
