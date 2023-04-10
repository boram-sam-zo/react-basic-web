import React from 'react';
import './Board.scss';
import $ from 'jquery';
import ModalBasic from './ModalBasic';

function Board() {
  $(function () {
    $('.board_title').click(function () {
      $('.board_title').removeClass('on');
      $(this).addClass('on');
      $('.board_content').hide();
      $('#' + $(this).data('type')).show();
    });
  });

  return (
    <div class="info">
      <div class="content">
        <div class="board_area">
          <div class="board_title on" data-type="board_notice">
            공지사항
          </div>
          <div class="board_title" data-type="board_data">
            자료실
          </div>
          <div class="board_title" data-type="board_news">
            뉴스
          </div>
          <div class="board_content" id="board_notice">
            <ul>
              <li>
                공지사항입니다. <span>2023-01-01</span>
              </li>
              <li>
                공지사항입니다. <span>2023-01-01</span>
              </li>
              <li>
                공지사항입니다. <span>2023-01-01</span>
              </li>
              <li>
                공지사항입니다. <span>2023-01-01</span>
              </li>
              <li>
                공지사항입니다. <span>2023-01-01</span>
              </li>
            </ul>
          </div>
          <div class="board_content" id="board_data">
            <ul>
              <li>
                자료실입니다. <span>2023-01-01</span>
              </li>
              <li>
                자료실입니다. <span>2023-01-01</span>
              </li>
              <li>
                <ModalBasic />
              </li>
              <li>
                자료실입니다. <span>2023-01-01</span>
              </li>
              <li>
                자료실입니다. <span>2023-01-01</span>
              </li>
            </ul>
          </div>
          <div class="board_content" id="board_news">
            <ul>
              <li>
                뉴스입니다. <span>2023-01-01</span>
              </li>
              <li>
                뉴스입니다. <span>2023-01-01</span>
              </li>
              <li>
                뉴스입니다. <span>2023-01-01</span>
              </li>
              <li>
                뉴스입니다. <span>2023-01-01</span>
              </li>
              <li>
                뉴스입니다. <span>2023-01-01</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
