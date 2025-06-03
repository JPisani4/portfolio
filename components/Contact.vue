<script></script>

<template>
  <section class="section-contact" id="contact">
    <div class="u-center-text u-margin-bottom-big">
      <h2 class="heading-2">Contact Me</h2>
    </div>

    <form action="?_method=PUT" method="POST" class="form">
      <div class="form-group">
        <input
          class="form-group--input"
          type="email"
          name="email"
          id="email"
          minlength="1"
          maxlength="50"
          required
        />
        <label class="form-group--label" for="email"
          ><strong>Email address</strong></label
        >
      </div>

      <div class="form-group">
        <input
          class="form-group--input"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          minlength="0"
          maxlength="16"
        />
        <label class="form-group--label" for="phoneNumber"
          ><strong>Phone number</strong></label
        >
      </div>

      <div class="form-group">
        <input
          class="form-group--input"
          type="text"
          name="referral"
          id="referral"
          minlength="0"
          maxlength="100"
        />
        <label class="form-group--label" for="referral"
          ><strong>How'd you find me?</strong></label
        >
      </div>

      <div class="form-group">
        <textarea
          rows="8"
          class="form-group--input"
          type="text"
          name="message"
          id="message"
          minlength="1"
          maxlength="1000"
          required
        ></textarea>
        <label class="form-group--label" for="message"
          ><strong>What can I do for you?</strong></label
        >
      </div>

      <input
        class="inputField"
        type="text"
        name="information"
        id="information"
        autocomplete="off"
        tabindex="-1"
      />

      <div class="form-group form-group--btn">
        <button class="btn btn--blue">Send Message</button>
      </div>
    </form>
  </section>
</template>
