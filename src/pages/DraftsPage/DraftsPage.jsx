import React, { useEffect, useState } from 'react'
import { getDrafts } from '../../api/get'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper';
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';
import { Link } from 'react-router-dom'
import './DraftsPage.scss'
import { deleteDraft } from '../../api/delete';

export const DraftsPage = () => {
  const [ drafts, setDrafts ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fn = async () => {
      const d = await getDrafts();
      setDrafts([...d.data]);
      setLoading(false);
    }

    fn();
  }, [drafts])

  if ( loading ) return null;

  const deleteHandler = async (id) => {
    await deleteDraft(id);
    const d = await getDrafts();
    setDrafts([...d.data]);
  }

  const draftList = drafts.map((x, id) => 
    <li key={id} className="draft-item d-f jc-sb ai-c">
      <Link to={`/create_story?edit=true&draftId=${x._id}`}>
        <p className="bold">{x.title}</p>
      </Link>
      <div className="draft-item-actions">
        <i className="fas fa-trash danger-icon" onClick={() => deleteHandler(x._id)}></i>
      </div>
    </li>
  )

  return (
    <DisplayWrapper header={true}>
      <DashSubnav/>
      <div className="container center">
        <h1 className="title ta-c">Drafts</h1>
        <ul className="d-f fxd-c draft-list">
          {draftList}
        </ul>      
      </div> 
    </DisplayWrapper>
  )
}
