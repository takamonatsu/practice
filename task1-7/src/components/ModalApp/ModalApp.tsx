import React, {useState} from 'react';
import ShowModal from './ShowModal';
import './ModalApp.css'
import { ModalStateProps, Task } from '../../types/Modal'

const ModalApp: React.FC = () => {
  const tasks: Task[] = [
    { 
      taskId: 1,
      name: 'Hello World アプリ',
      content: '最初のReactアプリを作成し、TypeScriptで"Hello, World!"と表示させます。',
      target: 'ReactとTypeScriptの基本的なセットアップとコンポーネントの作成に慣れる。'
    },
    { 
      taskId: 2,
      name: 'カウンターアプリ',
      content: 'ボタンをクリックするとカウントが増えるシンプルなカウンターを作成します。',
      target: 'Reactの状態（state）とイベントハンドリング、TypeScriptでの型付けを理解する。'
    },
    { 
      taskId: 3,
      name: 'ToDoリストアプリ',
      content: 'タスクを追加・削除・完了できるToDoリストを作成します。',
      target: '状態管理とリストのレンダリング、TypeScriptでのインターフェースの使用に慣れる。'
    },
    { 
      taskId: 4,
      name: '天気情報表示アプリ',
      content: '外部API（例：OpenWeatherMap）から天気情報を取得して表示するアプリを作成します。',
      target: 'APIリクエストとデータの表示方法、TypeScriptでの非同期処理を学ぶ。'
    },
    { 
      taskId: 5,
      name: 'フォーム入力とバリデーション',
      content: 'ユーザー入力を受け付けるフォームを作成し、バリデーションを行います。',
      target: 'フォームの扱い方とバリデーションの実装方法、TypeScriptでの型安全なフォームハンドリングを学ぶ。'
    }
  ];

  const [modalState, setModalState] = useState<ModalStateProps>({
    isShow: false,
    taskId: null,
    taskDetails: null,
  });

  const onClickModalBtn = (taskId: number) => {
    const selectedTask = tasks.find((task) => task.taskId === taskId) || null;
    setModalState({ isShow: true, taskId, taskDetails: selectedTask });
  };

  const closeModal = () => {
    setModalState({...modalState, isShow: false});
  };

  return (
    <div className='modal-app'>
      <h2>モーダルダイアログ</h2>
      <ul className='modal-btn-list'>
        {tasks.map(task => (
          <li key={task.taskId} className='modal-btn-list-item'>
            <button className='show-btn' onClick={() => onClickModalBtn(task.taskId)}>
              {task.name}
            </button>
          </li>
        ))}
      </ul>
      <ShowModal {...modalState} closeModal={closeModal} />
    </div>
  )
}

export default ModalApp
