import React from 'react';
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import InboxMessageList from '../../layouts/InboxMessageList/InboxMessageList';
import InboxChat from '../../layouts/InboxChat/InboxChat';
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';
import './Inbox.scss'

const messages = [
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"

      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    from: 'StoriesAfterMidnight',
    subject: "A test subject",
    messages: [
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'SomebroDude',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      },
      {
        from: 'StoriesAfterMidnight',
        message: "Lorem ipsum dolor amet gluten-free cardigan la croix waistcoat hella, intelligentsia everyday carry neutra bespoke. Coloring book 3 wolf moon yr, kombucha poutine kogi freegan try-hard raw denim man bun kale chips narwhal trust fund wolf. Salvia neutra fixie, jean shorts yr shabby chic offal forage mumblecore beard la croix. Blog cray meggings, mixtape williamsburg subway tile you probably haven't heard of them listicle kickstarter 8-bit vexillologist."
      }
    ],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  }
]

const Inbox = () => {
  return (
    <DisplayWrapper header={false}>
      <DashSubnav />
      <section className="inbox-wrapper center">
        <InboxMessageList data={messages}/>
        <InboxChat data={messages[0]}/>
      </section>
    </DisplayWrapper>
  );
}

export default Inbox;
