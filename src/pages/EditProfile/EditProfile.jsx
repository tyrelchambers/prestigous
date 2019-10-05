import React from 'react'
import './EditProfile.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import SignupForm from '../../components/forms/SignupForm'
import ProfileBasicsForm from '../../components/forms/editProfileForms/ProfileBasicsForm'
import SocialMediaForm from '../../components/forms/editProfileForms/SocialMediaForm'
import { DashButton, DangerButton, SubmitButton } from '../../components/buttons/Buttons'
import { Checkbox } from '../../components/inputs/Inputs'
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';

const EditProfile = () => {
  return (
    <DisplayWrapper header={true}>
      <DashSubnav />

      <div className="center edit-profile-wrapper  container mb+">
        <h1 className="title ta-c">Edit your profile</h1>
        <Block
          header="Profile Basics"
          blurb="Edit the public side of your account"
          form={<ProfileBasicsForm />}
        />

        <Block
          header="Social Media"
          blurb="This section is all about your social media links"
          form={<SocialMediaForm profileType="narrator"/>}
        />
        <Block
          header="Discoverability"
          blurb="Edit these settings to show people whether or not you're available for hire"
          form={<Checkbox type="checkbox" name="forHire" value="forHire" text="Available for hire"/>}
        />
        <Block
          header="Account"
          blurb="Edit the security and more private details of your account"
          form={<SignupForm />}
        />
        <Block
          header="Become Prestigious"
          blurb="View our plans for becoming a Prestigious member"
          form={<DashButton text="View Plans" />}
        />
        <Block
          header="Partner Program"
          blurb="Request a review (if you haven't), to become a Prestigious Partner"
          form={<DashButton text="Request Review" />}
        />
        <Block
          header="Cancellation"
          blurb="Cancel your account in this section"
          form={<DangerButton text="Delete Account" icon={<i className="fas fa-skull mr-"></i>}/>}
        />

        <div className="d-f jc-c">
          <SubmitButton text="Save Changes" icon={<i className="fas fa-save mr-"></i>}/>
        </div>
      </div>
    </DisplayWrapper>
  )
}

const Block = ({header, blurb, form}) => {
  return (
    <section className="edit-profile-block">
      <div className="d-f">
        <div className="d-f fxd-c edit-profile-col1">
          <h3 className="subtitle-underlined">{header}</h3>
          <p className="edit-block-blurb">{blurb}</p>
        </div>

        <div className="edit-profile-col2">
          {form}
        </div>
      </div>
    </section>
  )
}

export default EditProfile
