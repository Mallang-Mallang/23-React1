import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '최형준',
    comment: '안녕하세요. 최형준입니다.',
  },
  {
    name: '최형준',
    comment: '안녕하세요. 최형준입니다.',
  },
  {
    name: '최형준',
    comment: '안녕하세요. 최형준입니다.',
  },
];

function CommentList() {
  return (
    <div>
      {comments.map(function (v) {
        return <Comment name={v.name} comment={v.comment} />;
      })}
    </div>
  );
}

export default CommentList;
